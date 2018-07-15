export class Recorder {
    public getUserMediaStream(): Promise<MediaStream> {
        return navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
    }

    public record(mediaStream: MediaStream, onDataAvailableFunc: Function): void {
        console.log(mediaStream);
        console.log(onDataAvailableFunc);
        throw new Error('not implemented');
    }  
}