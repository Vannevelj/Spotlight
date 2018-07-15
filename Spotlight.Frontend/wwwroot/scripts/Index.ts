import { Recorder } from './Recorder.js';

export class Index {
    private readonly recorder: Recorder;
    private readonly targetHtmlElement: HTMLElement;

    private mediaStream: MediaStream | undefined;

    constructor(targetHtmlElement: HTMLElement) {
        this.recorder = new Recorder();
        this.targetHtmlElement = targetHtmlElement;
    }

    public init(): void {
        alert('init');
        this.recorder.getUserMediaStream()
            .then(this.onFulfilled, this.onRejected)
            .catch(this.handleMediaStreamError);
    }

    private onFulfilled(value: MediaStream): void {
        this.mediaStream = value;
        this.targetHtmlElement.setAttribute('srcObject', URL.createObjectURL(value));
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

        this.recorder.record(this.mediaStream, () => {
            // stream data
        });
    }
}