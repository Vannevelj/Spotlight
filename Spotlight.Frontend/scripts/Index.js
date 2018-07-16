import { Recorder } from './Recorder.js';
export class Index {
    constructor(targetHtmlElement) {
        this.mediaStream = undefined;
        // Needs arrow syntax to properly reference this
        this.onFulfilled = (value) => {
            this.mediaStream = value;
            this.targetHtmlElement.srcObject = value;
            this.startStreaming();
        };
        this.recorder = new Recorder();
        this.targetHtmlElement = targetHtmlElement;
    }
    init() {
        this.recorder.getUserMediaStream()
            .then(this.onFulfilled, this.onRejected)
            .catch(this.handleMediaStreamError);
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
        // Type is BlobEvent but unsupported by TypeScript
        this.recorder.record(this.mediaStream, (e) => {
            debugger;
            console.log(e);
        });
    }
}
//# sourceMappingURL=Index.js.map