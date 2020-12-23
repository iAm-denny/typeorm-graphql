import { Entity, Column, ManyToOne } from "typeorm";

import  { User } from './User'
import Models from "./Model";

@Entity("posts")
export class Post extends Models {
  @Column()
  title: string;

  @Column()
  body: string;

  @ManyToOne(() => User)
  user: User

}
