#include <SFML/Graphics.hpp>
#include <vector>
#include "../../duktape/duktape.h"

class Engine {
public:
  void runSFML(duk_context *_ctx);
  void createCircle(int, int, int, int);
private:
  sf::RenderWindow *mainWindow;
  duk_context *ctx;
  std::vector <sf::RectangleShape> circles;
};
