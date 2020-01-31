#include <sys/stat.h>
#include <thread>
#include <iostream>
#include <SFML/Graphics.hpp>
#include "../duktape/duktape.h"
#include "./engine/engine.h"

Engine *engine;

long GetFileSize(std::string filename)
{
    struct stat stat_buf;
    int rc = stat(filename.c_str(), &stat_buf);
    return rc == 0 ? stat_buf.st_size : -1;
}

/* For brevity assumes a maximum file length of 16kB. */
static void push_file_as_string(duk_context *ctx, const char *filename) {
    FILE *f;
    size_t len;
    char buf[GetFileSize(filename)];

    f = fopen(filename, "rb");
    if (f) {
        len = fread((void *) buf, 1, sizeof(buf), f);
        fclose(f);
        duk_push_lstring(ctx, (const char *) buf, (duk_size_t) len);
    } else {
        duk_push_undefined(ctx);
    }
}

static duk_ret_t native_print(duk_context *ctx) {
    duk_push_string(ctx, " ");
    duk_insert(ctx, 0);
    duk_join(ctx, duk_get_top(ctx) - 1);
    printf("%s\n", duk_to_string(ctx, -1));
    return 0;
}

static duk_ret_t SFML_CREATE_ELEMENT(duk_context *ctx) {
    int width = duk_get_int(ctx, -4);
    int height = duk_get_int(ctx, -3);
    int x = duk_get_int(ctx, -2);
    int y = duk_get_int(ctx, -1);
    engine->createCircle(width, height, x, y);
    return 0;
}

void runJavascriptEngine(duk_context *ctx) {

  if (!ctx) {
    printf("Failed to create a Duktape heap.\n");
    exit(1);
  }

  duk_push_global_object(ctx);
  duk_push_c_function(ctx, native_print, DUK_VARARGS);
  duk_put_prop_string(ctx, -2, "print");
  duk_pop(ctx);  /* ignore result */

  duk_push_global_object(ctx);
  duk_push_c_function(ctx, SFML_CREATE_ELEMENT, DUK_VARARGS);
  duk_put_prop_string(ctx, -2, "SFML_CREATE_ELEMENT");
  duk_pop(ctx);  /* ignore result */

  push_file_as_string(ctx, "../../build/bundle.js");

  if (duk_peval(ctx) != 0) {
      printf("Error during loading: %s\n", duk_safe_to_string(ctx, -1));
  }
  duk_pop(ctx);  /* ignore result */
}

int main(int argc, const char *argv[])
{
  duk_context *ctx = duk_create_heap_default();

  engine = new Engine();
  std::thread t1(runJavascriptEngine, ctx);
  engine->runSFML(ctx);

  t1.join();
  return 0;
}
