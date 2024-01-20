import Brush from "./icons/black/Brush.svelte";
import Chat from "./icons/black/Chat.svelte";
import Folder from "./icons/black/Folder.svelte";
import Mail from "./icons/black/Mail.svelte";

import Bag from "./icons/blue/Bag.svelte";
import Paint from "./icons/blue/Paint.svelte";
import Shield from "./icons/blue/Shield.svelte";

type Component = ConstructorOfATypedSvelteComponent;

const config = {
    profile: {
        name: "Emilia Peterson",
        image: "pfp.png"        
    },
    contents: {
        hero: {
            display: "Hi! I'm **Emilia Peterson**, a **Community Manager**",
            text: "I help foster communities."
        },
        looking_for: {
            heading: "What are you\n**looking for** today?",
            choices: [
                {
                    icon: Folder as Component,
                    content: "Viewing my resume"
                },
                {
                    icon: Brush as Component,
                    content: "Seeing what I offer"
                },
                {
                    icon: Chat as Component,
                    content: "Viewing user reviews"
                },
                {
                    icon: Mail as Component,
                    content: "Getting in touch with me"
                }
            ]
        },
        portfolio: {
            heading: "I've worked with hundreds of clients",
            heading2: "With moderation and **management**",
            communities: [

            ]
        }
    }
}

export { config };