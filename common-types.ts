export interface Message {
    author: string;
    text: string;

}export interface Messages {
    [key: string]: Message[];
}