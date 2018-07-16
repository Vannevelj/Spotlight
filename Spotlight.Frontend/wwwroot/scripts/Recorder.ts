declare const MediaRecorder: any; // unsupported by typescript

export class Recorder {
    public getUserMediaStream(): Promise<MediaStream> {
        return navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
    }

    public record(mediaStream: MediaStream, onDataAvailableFunc: Function): void {
        const options = {
            mimeType: 'video/webm'
        }

        const mediaRecorder = new MediaRecorder(mediaStream, options);
        mediaRecorder.ondataavailable = onDataAvailableFunc;

        mediaRecorder.start(4000);
    }
}