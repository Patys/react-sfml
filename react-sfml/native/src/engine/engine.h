#include <SFML/Graphics.hpp>
#include <vector>

class Engine {
public:
  void runSFML();
  void createCircle(int, int, int, int);
private:
  sf::RenderWindow *mainWindow;
  std::vector <sf::RectangleShape> circles;
};
