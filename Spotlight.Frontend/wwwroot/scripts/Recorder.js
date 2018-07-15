export class Recorder {
    getUserMediaStream() {
        return navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
    }
    record(mediaStream, onDataAvailableFunc) {
        console.log(mediaStream);
        console.log(onDataAvailableFunc);
        throw new Error('not implemented');
    }
}
//# sourceMappingURL=Recorder.js.map