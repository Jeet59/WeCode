var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, } from "typeorm";
import { User } from "./User.js";
import { Post } from "./Post.js";
let Comment = class Comment {
    constructor() {
        this.id = 0;
        this.content = "";
        this.createdAt = new Date();
        this.author = null;
        this.post = null;
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Comment.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.comments),
    __metadata("design:type", Object)
], Comment.prototype, "author", void 0);
__decorate([
    ManyToOne(() => Post, (post) => post.comments),
    __metadata("design:type", Object)
], Comment.prototype, "post", void 0);
Comment = __decorate([
    Entity()
], Comment);
export { Comment };
//# sourceMappingURL=Comment.js.map