cmake_minimum_required(VERSION 3.1)

project(Application)

## If you want to link SFML statically
# set(SFML_STATIC_LIBRARIES TRUE)

## In most cases better set in the CMake cache
# set(SFML_DIR "<sfml root prefix>/lib/cmake/SFML")

file(GLOB_RECURSE Application_SRC
    "src/*.h"
    "src/*.cpp"
    "src/*.c"
    "duktape/*.c"
    "duktape/*.h"
)
set_source_files_properties(${Application_SRC} PROPERTIES LANGUAGE CXX )
find_package(SFML 2.5 COMPONENTS graphics audio REQUIRED)
find_package (Threads)
add_executable(Application ${Application_SRC})
target_compile_features(Application PRIVATE cxx_std_17)
target_link_libraries(Application sfml-graphics sfml-audio ${CMAKE_THREAD_LIBS_INIT})
