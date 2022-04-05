// This file is auto generated. To update the file make changes to the code generator.

export interface Symbols extends Deno.ForeignLibraryInterface {
  SDL_UpperBlit: Deno.ForeignFunction;
  SDL_CreateRGBSurfaceWithFormat: Deno.ForeignFunction;
  SDL_CreateWindow: Deno.ForeignFunction;
  SDL_Delay: Deno.ForeignFunction;
  SDL_DestroyWindow: Deno.ForeignFunction;
  SDL_FillRect: Deno.ForeignFunction;
  SDL_GetWindowSurface: Deno.ForeignFunction;
  SDL_Init: Deno.ForeignFunction;
  SDL_LockSurface: Deno.ForeignFunction;
  SDL_MapRGB: Deno.ForeignFunction;
  SDL_MapRGBA: Deno.ForeignFunction;
  SDL_PollEvent: Deno.ForeignFunction;
  SDL_Quit: Deno.ForeignFunction;
  SDL_UnlockSurface: Deno.ForeignFunction;
  SDL_UpdateWindowSurface: Deno.ForeignFunction;
}

export const symbols: Symbols = {
  SDL_UpperBlit: {
    parameters: [
      "pointer", /* SDL_Surface* src */
      "pointer", /* SDL_Rect* srcrect */
      "pointer", /* SDL_Surface* dst */
      "pointer", /* SDL_Rect* dstrect */
    ],
    result: "i32", /* int */
  },
  SDL_CreateRGBSurfaceWithFormat: {
    parameters: [
      "u32", /* Uint32 flags */
      "i32", /* int width */
      "i32", /* int height */
      "i32", /* int depth */
      "u32", /* Uint32 format */
    ],
    result: "pointer", /* SDL_Surface* */
  },
  SDL_CreateWindow: {
    parameters: [
      "pointer", /* char* title */
      "i32", /* int x */
      "i32", /* int y */
      "i32", /* int w */
      "i32", /* int h */
      "u32", /* Uint32 flags */
    ],
    result: "pointer", /* SDL_Window* */
  },
  SDL_Delay: {
    parameters: [
      "u32", /* Uint32 ms */
    ],
    result: "void", /* void */
  },
  SDL_DestroyWindow: {
    parameters: [
      "pointer", /* SDL_Window* window */
    ],
    result: "void", /* void */
  },
  SDL_FillRect: {
    parameters: [
      "pointer", /* SDL_Surface* dst */
      "pointer", /* SDL_Rect* rect */
      "u32", /* Uint32 color */
    ],
    result: "i32", /* int */
  },
  SDL_GetWindowSurface: {
    parameters: [
      "pointer", /* SDL_Window* window */
    ],
    result: "pointer", /* SDL_Surface* */
  },
  SDL_Init: {
    parameters: [
      "u32", /* Uint32 flags */
    ],
    result: "i32", /* int */
  },
  SDL_LockSurface: {
    parameters: [
      "pointer", /* SDL_Surface* surface */
    ],
    result: "i32", /* int */
  },
  SDL_MapRGB: {
    parameters: [
      "pointer", /* SDL_PixelFormat* format */
      "u8", /* Uint8 r */
      "u8", /* Uint8 g */
      "u8", /* Uint8 b */
    ],
    result: "u32", /* Uint32 */
  },
  SDL_MapRGBA: {
    parameters: [
      "pointer", /* SDL_PixelFormat* format */
      "u8", /* Uint8 r */
      "u8", /* Uint8 g */
      "u8", /* Uint8 b */
      "u8", /* Uint8 a */
    ],
    result: "u32", /* Uint32 */
  },
  SDL_PollEvent: {
    parameters: [
      "pointer", /* SDL_Event* event */
    ],
    result: "i32", /* int */
  },
  SDL_Quit: {
    parameters: [],
    result: "void", /* void */
  },
  SDL_UnlockSurface: {
    parameters: [
      "pointer", /* SDL_Surface* surface */
    ],
    result: "void", /* void */
  },
  SDL_UpdateWindowSurface: {
    parameters: [
      "pointer", /* SDL_Window* window */
    ],
    result: "i32", /* int */
  },
};
