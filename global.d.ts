import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare global {
  // Extension de Window pour AgendaElement
  interface Window {
    AgendaElement: {
      institutionId?: string;
      uiConfig?: {
        desktop: { waitForPreselection: boolean; modalMode: boolean };
        mobile: { waitForPreselection: boolean; modalMode: boolean };
      };
    };
    agendaCommonScriptsLoaded?: boolean;
    agendaScriptLoaded?: boolean;
    // Google Analytics
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Pour React 19 : on étend React.JSX.IntrinsicElements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'apfr-agenda-root': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'data-apfr-m-name'?: string;
        'data-institution-id'?: string;
      };
    }
  }
}

export {}