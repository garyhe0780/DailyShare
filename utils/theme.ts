import { Evt, StatefulEvt } from "evt";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";

export enum Theme {
  light = "Light",
  dark = "Dark",
  system = "System",
}

const evtTheme = new StatefulEvt<Theme>(Theme.light);

if (IS_BROWSER) {
  evtTheme.post(
    (window.localStorage.getItem("theme") as Theme) ?? Theme.light
  );

  evtTheme.attach((theme: Theme) => {
		if (['dark', 'system'].some(e => e === theme.toLowerCase())) {
			window.document.documentElement.classList.add('dark');
		} else {
			window.document.documentElement.classList.remove('dark');
		}
  });
}

export default function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState(evtTheme.state);
  useEffect(() => {
    const ctx = Evt.newCtx();
    evtTheme.attach(ctx, setTheme);

    return () => {
      evtTheme.detach(ctx);
    };
  }, []);

  return [
    theme,
    (theme: Theme) => {
      console.log("change theme to ", theme);
      evtTheme.post(theme);
    },
  ];
}
