import ago from "s-ago";

export const relative = str => ago(new Date(str));
