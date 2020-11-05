import { setupMainThread } from "react-figma/rpc";

// eslint-disable-next-line no-undef
figma.showUI(__html__, { visible: false });

setupMainThread();
