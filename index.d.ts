declare type RemoteOptions = Partial<{
    url: string;
    data: any;
    onBeforeSend: (xhr: XMLHttpRequest, settings: object) => any;
    onComplete: (xhr: XMLHttpRequest, status: string) => any;
    onError: (xhr: XMLHttpRequest, status: string, error: Error) => any;
}>;

declare type PopupOptions = Partial<{
    openedClass: string;
    openedBodyClass: string;
    closeBtnSelector: string;
    targetPopupId: string;
    eventsNameSpace: string;
    lockScreen: boolean;
    lockScreenEl: HTMLElement;
    preventDefault: boolean;
    closeOnBgClick: boolean;
    closeOnEsc: boolean;
    closeOnResize: boolean;
    openOnClick: boolean;
    beforeOpen: (popup: Popup) => any;
    afterOpen: (popup: Popup) => any;
    beforeClose: (popup: Popup) => any;
    afterClose: (popup: Popup) => any;
    remote: RemoteOptions;
}>;

declare interface Popup {
    open(data: any): Popup;
    close(removeBodyLock: boolean): Popup;
    kill(): void;
}

declare interface jQuery {
    popup(options: PopupOptions): Popup;
}

declare type PopupStatic = {
    closeAllPopups(openedClassName: string): void;
    kill(popup: String | jQuery): void;
    expose(jquery: jQuery): void;
}

declare const popupStatic: PopupStatic;

export = popupStatic;
