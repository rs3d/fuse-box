import {BundleProducer} from "../core/BundleProducer";
import {FuseBox} from "../index";
import {should} from "fuse-test-runner";
import {Bundle} from "../core/Bundle";

const createFuse = (): FuseBox => {
    return FuseBox.init({
        homeDir: "C:/projects/Fuse-Box/fuse-box",
        output: ".fusebox/test-bundle/$name.js",
        modulesFolder: "C:/projects/Fuse-Box/fuse-box"
    });
}

const createFuse2 = (): FuseBox => {
    return FuseBox.init({
        homeDir: "C:/projects/Fuse-Box/fuse-box",
        output: ".fusebox/test-bundle/$name.js",
        modulesFolder: "C:/projects/Fuse-Box/fuse-box2"
    });
}

export class ConfigTest {
    "Should throw  if homeDir is the same as moulesFolder"() {
        const fuse = createFuse();
    }

    "Should not throw if homeDir is not the same as moulesFolder"() {
        const fuse = createFuse2();
    }
}