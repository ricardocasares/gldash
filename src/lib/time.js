import ago from "s-ago";

export const relative = str => ago(new Date(str));

relative("2019-04-18T22:58:29.403Z"); //?
