import { Recorder } from './Recorder.js';
export class Index {
    constructor(targetHtmlElement) {
        this.recorder = new Recorder();
        this.targetHtmlElement = targetHtmlElement;
    }
    init() {
        alert('init');
        this.recorder.getUserMediaStream()
            .then(this.onFulfilled, this.onRejected)
            .catch(this.handleMediaStreamError);
    }
    onFulfilled(value) {
        this.mediaStream = value;
        this.targetHtmlElement.setAttribute('srcObject', URL.createObjectURL(value));
    }
    onRejected(reason) {
        console.log(reason);
    }
    handleMediaStreamError(error) {
        console.error(error);
    }
    startStreaming() {
        if (this.mediaStream === undefined) {
            console.log('No mediastream connected');
            return;
        }
        this.recorder.record(this.mediaStream, () => {
            // stream data
        });
    }
}
//# sourceMappingURL=Index.js.map