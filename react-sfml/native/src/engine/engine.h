#include <SFML/Graphics.hpp>
#include <map>
#include "../../duktape/duktape.h"

class Engine {
public:
  void runSFML(duk_context *_ctx);
  void createBox(int, int, int, int);
private:
  sf::RenderWindow *mainWindow;
  duk_context *ctx;
  std::map <unsigned int, sf::RectangleShape> boxes;
};
