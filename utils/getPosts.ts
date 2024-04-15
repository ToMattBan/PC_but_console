import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export default async function (typePost: 'last' | 'first'): Promise<ParsedContent> {
  let desiredPost = null;

  switch (typePost) {
    case 'first':
      desiredPost = await queryContent().where({ _partial: false }).sort({ date: 1 }).findOne();
      break;
    case 'last':
      desiredPost = await queryContent().where({ _partial: false }).sort({ date: -1 }).findOne();
      break;
  }

  return desiredPost;
}