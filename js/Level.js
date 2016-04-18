import * as THREE from 'three'
import Scene from './Scene'
import Player from './Player'
import CollisionWorld from './Collision/CollisionWorld'
import CollisionGroup from './Collision/CollisionGroup'
import Maze from './Generator/Maze'
import SilverElement from './SilverElement'

export default class Level
{
    constructor(stage, controls) {
        this.size = (stage * 2) + 1;
        this.scene = new Scene();
        this.player = new Player(controls);
        this.collisionWorld = new CollisionWorld();
        this.maze = new Maze(this.size, this.scene);
        this.silverElement = new SilverElement(1, 1, this.player);

        this.scene.add(this.silverElement);

        this.player.initX = this.size;
        this.player.initZ = this.size;

        this.createWorld();
    }


    createWorld() {
        let boxGroup = new CollisionGroup();

        this.player.addBoxCollision(boxGroup);
        this.collisionWorld.addGroup(boxGroup);
        this.collisionWorld.addGroup(this.player.collisionGroup);

        this.maze.draw(boxGroup);
    }

    update() {
        this.player.controller();
        this.silverElement.update();
        this.collisionWorld.test();
    }
}
