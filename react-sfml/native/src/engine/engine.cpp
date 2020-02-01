#include "./Keyboard/Keyboard.h"
#include "./engine.h"

void Engine::runSFML(duk_context *_ctx) {
  ctx = _ctx;

  if (mainWindow == nullptr)
      mainWindow = new sf::RenderWindow(sf::VideoMode(800, 600), "Game");

  mainWindow->setFramerateLimit(60);

  while(mainWindow->isOpen())
  {
    sf::Event event;
    while (mainWindow->pollEvent(event))
    {
      if (event.type == sf::Event::KeyPressed)
      {
        // TODO: move this code to separate function
        // Send key to JS
        duk_push_global_object(ctx);
        duk_get_global_string(ctx, "reactsfml");
        duk_get_prop_string(ctx, -1, "SFML_KEY_PRESSED");
        duk_push_string(ctx, Keyboard::getKeyName(event.key.code));

        if (duk_pcall(ctx, 1) != 0) {
            printf("Error: %s\n", duk_safe_to_string(ctx, -1));
        }
        duk_pop(ctx);  /* pop result/error */
      }
      if(event.type == sf::Event::Closed)
      {
        mainWindow->close();
        return;
      }
    }
    mainWindow->clear();
    for( size_t i = 0; i < circles.size(); i++ ) {
      mainWindow->draw(circles[i]);
    }
    mainWindow->display();
  }
}

void Engine::createCircle(int width, int height, int x, int y) {
  sf::RectangleShape shape(sf::Vector2f(width, height));
  shape.setPosition(x, y);
  circles.push_back(shape);
}
