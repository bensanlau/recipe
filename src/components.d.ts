/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface IImprint {
    }
    interface ITerms {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLIImprintElement extends Components.IImprint, HTMLStencilElement {
    }
    var HTMLIImprintElement: {
        prototype: HTMLIImprintElement;
        new (): HTMLIImprintElement;
    };
    interface HTMLITermsElement extends Components.ITerms, HTMLStencilElement {
    }
    var HTMLITermsElement: {
        prototype: HTMLITermsElement;
        new (): HTMLITermsElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "i-imprint": HTMLIImprintElement;
        "i-terms": HTMLITermsElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface IImprint {
    }
    interface ITerms {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "i-imprint": IImprint;
        "i-terms": ITerms;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "i-imprint": LocalJSX.IImprint & JSXBase.HTMLAttributes<HTMLIImprintElement>;
            "i-terms": LocalJSX.ITerms & JSXBase.HTMLAttributes<HTMLITermsElement>;
        }
    }
}