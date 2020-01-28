#include "./engine.h"

void Engine::runSFML() {
  if (mainWindow == nullptr)
      mainWindow = new sf::RenderWindow(sf::VideoMode(800, 600), "Game");

  mainWindow->setFramerateLimit(60);

  while(mainWindow->isOpen())
  {
    sf::Event event;
    while (mainWindow->pollEvent(event))
    {
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
