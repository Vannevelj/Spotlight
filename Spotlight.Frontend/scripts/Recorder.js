export class Recorder {
    getUserMediaStream() {
        return navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
    }
    record(mediaStream, onDataAvailableFunc) {
        const options = {
            mimeType: 'video/webm'
        };
        const mediaRecorder = new MediaRecorder(mediaStream, options);
        mediaRecorder.ondataavailable = onDataAvailableFunc;
        mediaRecorder.start(4000);
    }
}
//# sourceMappingURL=Recorder.js.map