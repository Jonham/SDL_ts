import { Event } from "./SDL/events.ts";
import { GetError, WaitEvent } from "./SDL/functions.ts";

export class Events {
  /**
   * Get a lazy stream of events using SDL_WaitEvent.
   * @returns a lazy stream of events using SDL_WaitEvent
   * @example
   * ```ts
   * for await (const event of Events.asyncIterator()) {
   *   console.log(event.type)
   * }
   * ```
   */
  public static asyncIterator(): AsyncIterable<Event> {
    return {
      [Symbol.asyncIterator](): AsyncIterator<Event> {
        const event: Event = null!;
        return {
          next(): Promise<IteratorResult<Event, never>> {
            return new Promise<IteratorResult<Event, never>>((resolve, reject) => {
              const result = WaitEvent(event);
              if (result === 0) {
                reject(GetError());
              } else {
                resolve({
                  done: false,
                  value: event,
                });
              }
            });
          },
        };
      },
    };
  }
}
