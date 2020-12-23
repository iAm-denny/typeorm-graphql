import { Entity, Column, OneToMany } from "typeorm";

import Models from "./Model";
import { Post } from "./Post";

@Entity("users")
export class User extends Models {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @OneToMany(() => Post, post => post.user)
  posts: Post[]
}
