import * as THREE from 'three'
import Scene from './Scene'
import Player from './Player'
import CollisionWorld from './Collision/CollisionWorld'
import CollisionGroup from './Collision/CollisionGroup'
import Maze from './Generator/Maze'
import TextureLoader from './TextureLoader'

export default class Level
{
    constructor(controls) {
        this.scene = new Scene();
        this.player = new Player(controls);
        this.collisionWorld = new CollisionWorld();
        this.maze = new Maze(10, this.scene);

        this.createWorld();
    }


    createWorld() {
        let textureLoader = new TextureLoader();
        let boxGroup = new CollisionGroup();
        
        this.player.addBoxCollision(boxGroup);
        this.collisionWorld.addGroup(boxGroup);
        this.collisionWorld.addGroup(this.player.collisionGroup);

        this.maze.draw(boxGroup);
    }

    update() {
        this.player.controller();
        this.collisionWorld.test();
    }
}
