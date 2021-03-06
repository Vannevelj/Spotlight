﻿import { Recorder } from './Recorder.js';

export class Index {
    private readonly recorder: Recorder;
    private readonly targetHtmlElement: HTMLMediaElement;

    private mediaStream: MediaStream | undefined = undefined;

    constructor(targetHtmlElement: HTMLMediaElement) {
        this.recorder = new Recorder();
        this.targetHtmlElement = targetHtmlElement;
    }

    public init(): void {
        this.recorder.getUserMediaStream()
            .then(this.onFulfilled, this.onRejected)
            .catch(this.handleMediaStreamError);
    }

    // Needs arrow syntax to properly reference this
    private onFulfilled = (value: MediaStream) => {
        this.mediaStream = value;
        this.targetHtmlElement.srcObject = value;

        this.startStreaming();
    }

    private onRejected(reason: any): void {
        console.log(reason);
    }

    private handleMediaStreamError(error: any): void {
        console.error(error);
    }

    public startStreaming(): void {
        if (this.mediaStream === undefined) {
            console.log('No mediastream connected');
            return;
        }

        // Type is BlobEvent but unsupported by TypeScript
        this.recorder.record(this.mediaStream, (e: any) => {
            debugger;
            console.log(e);
        });
    }
}