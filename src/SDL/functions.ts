// This file is auto generated. To update the file make changes to the code generator.

// deno-lint-ignore-file no-unused-vars

import platform from "../_platform.ts";
import { Pointer } from "../_pointers.ts";
import { BoxedPointer } from "../boxes.ts";
import { DynamicLibrary } from "../_library.ts";
import { PointerLike } from "../pointers.ts";
import { f64, i32, PointerValue, TypedArray, u32, u64, u8 } from "../types.ts";
import { symbols } from "./_symbols.ts";

import {
  ArrayOrder,
  BitmapOrder,
  EventType,
  InitFlags,
  Keycode,
  PackedLayout,
  PackedOrder,
  PixelType,
  RendererFlags,
  RendererFlip,
  ScaleMode,
  Scancode,
  TextureAccess,
  TextureModulate,
  WindowEventID,
  WindowFlags,
  WindowPos,
} from "./enums.ts";
import {
  BlitMap,
  Keysym,
  PixelFormat,
  Point,
  Rect,
  Renderer,
  RendererInfo,
  RWops,
  Surface,
  Texture,
  version,
  Window,
} from "./structs.ts";

import { Event } from "./events.ts";
import { RWMode } from "./types.ts";

let _library: DynamicLibrary<typeof symbols> = null!;

export function BlitScaled(
  src: PointerLike<Surface>,
  srcrect: PointerLike<Rect> | null,
  dst: PointerLike<Surface>,
  dstrect: PointerLike<Rect> | null,
): i32 {
  return _library.symbols.SDL_UpperBlitScaled(
    Pointer.of(src),
    Pointer.of(srcrect),
    Pointer.of(dst),
    Pointer.of(dstrect),
  ) as i32;
}

export function BlitSurface(
  src: PointerLike<Surface>,
  srcrect: PointerLike<Rect> | null,
  dst: PointerLike<Surface>,
  dstrect: PointerLike<Rect> | null,
): i32 {
  return _library.symbols.SDL_UpperBlit(
    Pointer.of(src),
    Pointer.of(srcrect),
    Pointer.of(dst),
    Pointer.of(dstrect),
  ) as i32;
}

export function ConvertSurface(
  src: PointerLike<Surface>,
  fmt: PointerLike<PixelFormat>,
  flags: u32,
): Surface | null {
  return Surface.of(_library.symbols.SDL_ConvertSurface(
    Pointer.of(src),
    Pointer.of(fmt),
    flags,
  ) as PointerValue<Surface>);
}

export function CreateRenderer(
  window: PointerLike<Window>,
  index: i32,
  flags: u32,
): Renderer | null {
  return Renderer.of(_library.symbols.SDL_CreateRenderer(
    Pointer.of(window),
    index,
    flags,
  ) as PointerValue<Renderer>);
}

export function CreateRGBSurfaceFrom(
  pixels: TypedArray,
  width: i32,
  height: i32,
  depth: i32,
  pitch: i32,
  Rmask: u32,
  Gmask: u32,
  Bmask: u32,
  Amask: u32,
): Surface | null {
  return Surface.of(_library.symbols.SDL_CreateRGBSurfaceFrom(
    Pointer.ofTypedArray(pixels),
    width,
    height,
    depth,
    pitch,
    Rmask,
    Gmask,
    Bmask,
    Amask,
  ) as PointerValue<Surface>);
}

export function CreateRGBSurfaceWithFormat(
  flags: u32,
  width: i32,
  height: i32,
  depth: i32,
  format: u32,
): Surface | null {
  return Surface.of(_library.symbols.SDL_CreateRGBSurfaceWithFormat(
    flags,
    width,
    height,
    depth,
    format,
  ) as PointerValue<Surface>);
}

export function CreateTexture(
  renderer: PointerLike<Renderer>,
  format: u32,
  access: i32,
  w: i32,
  h: i32,
): Texture | null {
  return Texture.of(_library.symbols.SDL_CreateTexture(
    Pointer.of(renderer),
    format,
    access,
    w,
    h,
  ) as PointerValue<Texture>);
}

export function CreateTextureFromSurface(
  renderer: PointerLike<Renderer>,
  surface: PointerLike<Surface>,
): Texture | null {
  return Texture.of(_library.symbols.SDL_CreateTextureFromSurface(
    Pointer.of(renderer),
    Pointer.of(surface),
  ) as PointerValue<Texture>);
}

export function CreateWindow(
  title: string,
  x: WindowPos,
  y: WindowPos,
  w: i32,
  h: i32,
  flags: WindowFlags,
): Window | null;
export function CreateWindow(
  title: string,
  x: i32,
  y: i32,
  w: i32,
  h: i32,
  flags: WindowFlags,
): Window | null;
export function CreateWindow(
  title: string,
  x: WindowPos | i32,
  y: WindowPos | i32,
  w: i32,
  h: i32,
  flags: WindowFlags,
): Window | null {
  return Window.of(_library.symbols.SDL_CreateWindow(
    platform.toNativeString(title),
    x,
    y,
    w,
    h,
    flags,
  ) as PointerValue<Window>);
}

export function CreateWindowAndRenderer(
  width: i32,
  height: i32,
  window_flags: WindowFlags,
  window: BoxedPointer<Window>,
  renderer: BoxedPointer<Renderer>,
): i32 {
  return _library.symbols.SDL_CreateWindowAndRenderer(
    width,
    height,
    window_flags,
    Pointer.ofTypedArray(window._data),
    Pointer.ofTypedArray(renderer._data),
  ) as i32;
}

export function Delay(
  ms: u32,
): void {
  _library.symbols.SDL_Delay(
    ms,
  );
}

export function DestroyRenderer(
  renderer: PointerLike<Renderer>,
): void {
  _library.symbols.SDL_DestroyRenderer(
    Pointer.of(renderer),
  );
}

export function DestroyTexture(
  texture: PointerLike<Texture>,
): void {
  _library.symbols.SDL_DestroyTexture(
    Pointer.of(texture),
  );
}

export function DestroyWindow(
  window: PointerLike<Window>,
): void {
  _library.symbols.SDL_DestroyWindow(
    Pointer.of(window),
  );
}

export function FillRect(
  dst: PointerLike<Surface>,
  rect: PointerLike<Rect> | null,
  color: u32,
): i32 {
  return _library.symbols.SDL_FillRect(
    Pointer.of(dst),
    Pointer.of(rect),
    color,
  ) as i32;
}

export function FreeSurface(
  surface: PointerLike<Surface>,
): void {
  _library.symbols.SDL_FreeSurface(
    Pointer.of(surface),
  );
}

export function GetError(): string {
  return platform.fromNativeString(_library.symbols.SDL_GetError() as PointerValue<unknown>);
}

export function GetKeyboardState(
  numkeys: PointerLike<number> | null,
): PointerValue<u8> {
  return _library.symbols.SDL_GetKeyboardState(
    Pointer.of(numkeys),
  ) as PointerValue<u8>;
}

export function GetRendererInfo(
  renderer: PointerLike<Renderer>,
  info: PointerLike<RendererInfo>,
): i32 {
  return _library.symbols.SDL_GetRendererInfo(
    Pointer.of(renderer),
    Pointer.of(info),
  ) as i32;
}

export function GetRevision(): string {
  return platform.fromNativeString(_library.symbols.SDL_GetRevision() as PointerValue<unknown>);
}

export function GetScancodeFromKey(
  key: Keycode,
): Scancode {
  return _library.symbols.SDL_GetScancodeFromKey(
    key,
  ) as Scancode;
}

export function GetScancodeName(
  scancode: Scancode,
): string {
  return platform.fromNativeString(_library.symbols.SDL_GetScancodeName(
    scancode,
  ) as PointerValue<unknown>);
}

export function GetSystemRAM(): i32 {
  return _library.symbols.SDL_GetSystemRAM() as i32;
}

export function GetTicks(): u32 {
  return _library.symbols.SDL_GetTicks() as u32;
}

export function GetTicks64(): u64 {
  return _library.symbols.SDL_GetTicks64() as u64;
}

export function GetVersion(
  ver: PointerLike<version>,
): void {
  _library.symbols.SDL_GetVersion(
    Pointer.of(ver),
  );
}

export function GetWindowSurface(
  window: PointerLike<Window>,
): Surface | null {
  return Surface.of(_library.symbols.SDL_GetWindowSurface(
    Pointer.of(window),
  ) as PointerValue<Surface>);
}

export function GetWindowTitle(
  window: PointerLike<Window>,
): string {
  return platform.fromNativeString(_library.symbols.SDL_GetWindowTitle(
    Pointer.of(window),
  ) as PointerValue<unknown>);
}

export function Init(flags: InitFlags, libraryPath?: string): number;
export function Init(flags: number, libraryPath?: string): number;
export function Init(flags: InitFlags | number, libraryPath?: string): number {
  _library = platform.loadLibrary("SDL2", symbols, libraryPath);
  return _library.symbols.SDL_Init(flags) as number;
}

export function LoadBMP_RW(
  src: PointerLike<RWops>,
  freesrc: i32,
): Surface | null {
  return Surface.of(_library.symbols.SDL_LoadBMP_RW(
    Pointer.of(src),
    freesrc,
  ) as PointerValue<Surface>);
}

export function LockSurface(
  surface: PointerLike<Surface>,
): i32 {
  return _library.symbols.SDL_LockSurface(
    Pointer.of(surface),
  ) as i32;
}

export function MapRGB(
  format: PointerLike<PixelFormat>,
  r: u8,
  g: u8,
  b: u8,
): u32 {
  return _library.symbols.SDL_MapRGB(
    Pointer.of(format),
    r,
    g,
    b,
  ) as u32;
}

export function MapRGBA(
  format: PointerLike<PixelFormat>,
  r: u8,
  g: u8,
  b: u8,
  a: u8,
): u32 {
  return _library.symbols.SDL_MapRGBA(
    Pointer.of(format),
    r,
    g,
    b,
    a,
  ) as u32;
}

export function MaximizeWindow(
  window: PointerLike<Window>,
): void {
  _library.symbols.SDL_MaximizeWindow(
    Pointer.of(window),
  );
}

export function MinimizeWindow(
  window: PointerLike<Window>,
): void {
  _library.symbols.SDL_MinimizeWindow(
    Pointer.of(window),
  );
}

export function PollEvent(
  event: PointerLike<Event>,
): i32 {
  return _library.symbols.SDL_PollEvent(
    Pointer.of(event),
  ) as i32;
}

export function QueryTexture(
  texture: PointerLike<Texture>,
  format: PointerLike<u32> | null,
  access: PointerLike<number> | null,
  w: PointerLike<number>,
  h: PointerLike<number>,
): i32 {
  return _library.symbols.SDL_QueryTexture(
    Pointer.of(texture),
    Pointer.of(format),
    Pointer.of(access),
    Pointer.of(w),
    Pointer.of(h),
  ) as i32;
}

export function Quit(): void {
  _library.symbols.SDL_Quit();
  _library.close();
}

export function RenderClear(
  renderer: PointerLike<Renderer>,
): i32 {
  return _library.symbols.SDL_RenderClear(
    Pointer.of(renderer),
  ) as i32;
}

export function RenderCopy(
  renderer: PointerLike<Renderer>,
  texture: PointerLike<Texture>,
  srcrect: PointerLike<Rect> | null,
  dstrect: PointerLike<Rect> | null,
): i32 {
  return _library.symbols.SDL_RenderCopy(
    Pointer.of(renderer),
    Pointer.of(texture),
    Pointer.of(srcrect),
    Pointer.of(dstrect),
  ) as i32;
}

export function RenderCopyEx(
  renderer: PointerLike<Renderer>,
  texture: PointerLike<Texture>,
  srcrect: PointerLike<Rect>,
  dstrect: PointerLike<Rect>,
  angle: f64,
  center: PointerLike<Point>,
  flip: RendererFlip,
): i32 {
  return _library.symbols.SDL_RenderCopyEx(
    Pointer.of(renderer),
    Pointer.of(texture),
    Pointer.of(srcrect),
    Pointer.of(dstrect),
    angle,
    Pointer.of(center),
    flip,
  ) as i32;
}

export function RenderDrawLine(
  renderer: PointerLike<Renderer>,
  x1: i32,
  y1: i32,
  x2: i32,
  y2: i32,
): i32 {
  return _library.symbols.SDL_RenderDrawLine(
    Pointer.of(renderer),
    x1,
    y1,
    x2,
    y2,
  ) as i32;
}

export function RenderDrawLines(
  renderer: PointerLike<Renderer>,
  points: PointerLike<Point>,
  count: i32,
): i32 {
  return _library.symbols.SDL_RenderDrawLines(
    Pointer.of(renderer),
    Pointer.of(points),
    count,
  ) as i32;
}

export function RenderDrawPoint(
  renderer: PointerLike<Renderer>,
  x: i32,
  y: i32,
): i32 {
  return _library.symbols.SDL_RenderDrawPoint(
    Pointer.of(renderer),
    x,
    y,
  ) as i32;
}

export function RenderDrawPoints(
  renderer: PointerLike<Renderer>,
  points: PointerLike<Point>,
  count: i32,
): i32 {
  return _library.symbols.SDL_RenderDrawPoints(
    Pointer.of(renderer),
    Pointer.of(points),
    count,
  ) as i32;
}

export function RenderDrawRect(
  renderer: PointerLike<Renderer>,
  rect: PointerLike<Rect>,
): i32 {
  return _library.symbols.SDL_RenderDrawRect(
    Pointer.of(renderer),
    Pointer.of(rect),
  ) as i32;
}

export function RenderDrawRects(
  renderer: PointerLike<Renderer>,
  rects: PointerLike<Rect>,
  count: i32,
): i32 {
  return _library.symbols.SDL_RenderDrawRects(
    Pointer.of(renderer),
    Pointer.of(rects),
    count,
  ) as i32;
}

export function RenderFillRect(
  renderer: PointerLike<Renderer>,
  rect: PointerLike<Rect>,
): i32 {
  return _library.symbols.SDL_RenderFillRect(
    Pointer.of(renderer),
    Pointer.of(rect),
  ) as i32;
}

export function RenderFillRects(
  renderer: PointerLike<Renderer>,
  rects: PointerLike<Rect>,
  count: i32,
): i32 {
  return _library.symbols.SDL_RenderFillRects(
    Pointer.of(renderer),
    Pointer.of(rects),
    count,
  ) as i32;
}

export function RenderFlush(
  renderer: PointerLike<Renderer>,
): i32 {
  return _library.symbols.SDL_RenderFlush(
    Pointer.of(renderer),
  ) as i32;
}

export function RenderPresent(
  renderer: PointerLike<Renderer>,
): void {
  _library.symbols.SDL_RenderPresent(
    Pointer.of(renderer),
  );
}

export function RestoreWindow(
  window: PointerLike<Window>,
): void {
  _library.symbols.SDL_RestoreWindow(
    Pointer.of(window),
  );
}

export function RWFromFile(
  file: string,
  mode: RWMode,
): RWops | null {
  return RWops.of(_library.symbols.SDL_RWFromFile(
    platform.toNativeString(file),
    platform.toNativeString(mode),
  ) as PointerValue<RWops>);
}

export function SetRenderDrawColor(
  renderer: PointerLike<Renderer>,
  r: u8,
  g: u8,
  b: u8,
  a: u8,
): i32 {
  return _library.symbols.SDL_SetRenderDrawColor(
    Pointer.of(renderer),
    r,
    g,
    b,
    a,
  ) as i32;
}

export function SetWindowTitle(
  window: PointerLike<Window>,
  title: string,
): void {
  _library.symbols.SDL_SetWindowTitle(
    Pointer.of(window),
    platform.toNativeString(title),
  );
}

export function UnlockSurface(
  surface: PointerLike<Surface>,
): void {
  _library.symbols.SDL_UnlockSurface(
    Pointer.of(surface),
  );
}

export function UpdateWindowSurface(
  window: PointerLike<Window>,
): i32 {
  return _library.symbols.SDL_UpdateWindowSurface(
    Pointer.of(window),
  ) as i32;
}
