var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, BaseEntity, OneToMany, } from "typeorm";
import { User } from "./User.js";
import { Comment } from "./Comment.js";
let Post = class Post extends BaseEntity {
    constructor(user) {
        super();
        this.id = 0;
        this.content = "";
        this.createdAt = new Date();
        this.comments = null;
        this.author = user;
    }
    setCreatedAt() {
        this.createdAt = new Date();
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.posts),
    __metadata("design:type", Object)
], Post.prototype, "author", void 0);
__decorate([
    OneToMany(() => Comment, (comment) => comment.post, {
        eager: true,
    }),
    __metadata("design:type", Object)
], Post.prototype, "comments", void 0);
__decorate([
    BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Post.prototype, "setCreatedAt", null);
Post = __decorate([
    Entity(),
    __metadata("design:paramtypes", [Object])
], Post);
export { Post };
//# sourceMappingURL=Post.js.map