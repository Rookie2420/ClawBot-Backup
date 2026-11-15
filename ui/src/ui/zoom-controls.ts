import { html } from "lit";
import type { AppViewState } from "./app-view-state.ts";

export function renderZoomControls(state: AppViewState) {
  const zoom = state.settings.zoom ?? 1.0;
  const zoomPercent = Math.round(zoom * 100);
  const zoomIn = () => {
    const newZoom = Math.min(2.0, zoom + 0.1);
    state.applySettings({ ...state.settings, zoom: newZoom });
  };
  const zoomOut = () => {
    const newZoom = Math.max(0.5, zoom - 0.1);
    state.applySettings({ ...state.settings, zoom: newZoom });
  };
  const resetZoom = () => {
    state.applySettings({ ...state.settings, zoom: 1.0 });
  };
  return html`<div class="zoom-controls"><button class="zoom-btn zoom-btn--out" @click=${zoomOut} ?disabled=${zoom <= 0.5} title="Zoom out">−</button><button class="zoom-btn zoom-btn--reset" @click=${resetZoom} title="Reset zoom">${zoomPercent}%</button><button class="zoom-btn zoom-btn--in" @click=${zoomIn} ?disabled=${zoom >= 2.0} title="Zoom in">+</button></div>`;
}
