export class SavetreesModel {
    public name: string;
    public type: string;
    public imagePath: string;
    constructor(name: string, type: string, imgpath: string) {
        this.name = name;
        this.type = type;
        this.imagePath = imgpath;
    }
}
