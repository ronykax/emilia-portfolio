<script lang="ts">
    // Services
    import Bag from "$lib/icons/blue/Bag.svelte";
    import Shield from "$lib/icons/blue/Shield.svelte";
    import Paint from "$lib/icons/blue/Paint.svelte";

    // Choices
    import Folder from "$lib/icons/black/Folder.svelte";
    import Brush from "$lib/icons/black/Brush.svelte";
    import Chat from "$lib/icons/black/Chat.svelte";
    import Mail from "$lib/icons/black/Mail.svelte";

    // Socials
    import Fiverr from "$lib/icons/blue/Fiverr.svelte";
    import Discord from "$lib/icons/blue/Discord.svelte";
    import Twitter from "$lib/icons/blue/Twitter.svelte";
    import Bluesky from "$lib/icons/blue/Bluesky.svelte";

    // Misc
    import Linked from "$lib/icons/white/Linked.svelte";
    import Hamburger from "$lib/icons/black/Hamburger.svelte";
    import Scroller from "$lib/Scroller.svelte";

    interface Item {
        title?: string;
        subject?: string;
        description?: string;
        icon?: ConstructorOfATypedSvelteComponent;
        image?: string;
    }

    const choices: Item[] = [
        {
            title: "Viewing my resume",
            icon: Folder
        },
        {
            title: "Seeing what I offer",
            icon: Brush
        },
        {
            title: "Viewing user reviews",
            icon: Chat
        },
        {
            title: "Getting in touch with me",
            icon: Mail
        }
    ];

    const services: Item[] = [
        {
            title: "Management",
            description: "I will do Discord community management for you!",
            icon: Bag
        },
        {
            title: "Moderation",
            description: "I will do Discord community moderation for you!",
            icon: Shield
        },
        {
            title: "Design",
            description: "I will setup a professional Discord server for you!",
            icon: Paint
        }
    ];

    const reviews: Item[] = [
        {
            title: "Indigo",
            subject: "Fiverr Expert",
            description: "I've had the privilege of collaborating with Emilia for over two years on our Fiverr gig, \"Discord Doctor,\" crafting professional Discord communities across various fields. Emilia's perfectionism in both aesthetics and functionality has been instrumental in our success, always going the extra mile to ensure every detail is just right. Her willingness to step in and cover for me during personal challenges showcases her loyalty and dedication. Her expertise in Discord server setup, tech support, security, and moderation, coupled with her fun and caring personality, makes her an invaluable asset. I wholeheartedly endorse Emilia for any endeavor, confident that her character and hard work will shine through in everything she does.",
            image: "favicon.png"
        },
        {
            title: "Pockets",
            subject: "Blight: Survival Moderator",
            description: "I've been fortunate enough to work with Emilia for the past year in administrating and developing the official Discord server for the highly anticipated Blight: Survival video game. She works hard to iterate on each component of our server every chance she gets, improving it with her extensive knowledgebase of Discord's systems; bots; popular trends; security concerns; moderation and more. She takes constructive feedback happily, always looking to perfect her workflows and refine her craft. On top of her expertise, Emilia has a radiant personality that is both supportive and loyal, and I would gladly recommend working with her for any project.",
            image: "favicon.png"
        }
    ];

    const socials: Item[] = [
        {
            title: "Fiverr",
            icon: Fiverr
        },
        {
            title: "Discord",
            icon: Discord
        },
        {
            title: "Twitter",
            icon: Twitter
        },
        {
            title: "Bluesky",
            icon: Bluesky
        }
    ];

    const guilds: {
        row1: Item[],
        row2: Item[]
    } = {
        row1: [
            {
                title: "Blight: Survival",
                subject: "28,000+ Members",
                description: "https://discord.gg/blightsurvival",
                image: "favicon.png"
            },
            {
                title: "Unrecord",
                subject: "29,000+ Members",
                description: "https://discord.gg/unrecord",
                image: "favicon.png"
            },
            {
                title: "ChibeeU",
                subject: "35+ Members",
                description: "https://discord.gg/rvRf5vuwXb",
                image: "favicon.png"
            },
            {
                title: "Kinstrife",
                subject: "2000+ Members",
                description: "https://discord.gg/nxtWpbvfFJ",
                image: "favicon.png"
            },
            {
                title: "Trans Gamers",
                subject: "50+ Members",
                description: "https://discord.gg/SVe9pNwtD9",
                image: "favicon.png"
            }
        ],
        row2: [
            {
                title: "Organise & Optimise",
                subject: "100+ Members",
                description: "https://discord.gg/CZXmatPxQ5",
                image: "favicon.png"
            },
            {
                title: "Rise & Reign",
                subject: "400+ Members",
                description: "https://discord.gg/42dnzBwkXd",
                image: "favicon.png"
            },
            {
                title: "Would You",
                subject: "400+ Members",
                description: "https://discord.gg/Jmd7GkKRmW",
                image: "favicon.png"
            },
            {
                title: "Emilia's Den",
                subject: "20+ Members",
                description: "https://discord.gg/VQCQwN6p",
                image: "favicon.png"
            }
        ]
    }
</script>

<div>
    <div class="h-screen">
        <div class="bg-blue">
            <div class="flex items-center justify-between h-20 px-6 bg-white rounded-bl-3xl md:px-32">
                <div class="flex items-center gap-3">
                    <img class="w-10 rounded-full" src="favicon.png" alt="">
                    <h1 class="text-2xl font-semibold font-bricolage">Emilia Peterson</h1>
                </div>
                <button>
                    <Hamburger />
                </button>
            </div>
        </div>
        <div class="flex items-end pb-20 h-5/6 bg-blue rounded-br-8xl">
            <div class="flex flex-col gap-5 px-6 pt-64 md:px-32">
                <h1 class="text-5xl font-light text-white font-bricolage">
                    Hi! I’m
                    <span class="font-semibold">Emilia Petersen</span>, a <span class="font-semibold">Community Manager</span>
                </h1>
                <span class="text-2xl font-medium text-white">I help foster communities.</span>
            </div>
        </div>
    </div>

    <div class="mb-24">
        <div class="flex flex-col items-center gap-9">
            <h1 class="text-3xl text-center font-bricolage">
                What are you<br><span class="font-semibold">looking for</span> today?
            </h1>
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
                {#each choices as item, index}                    
                    <div class="w-40 p-2.5 bg-blue rounded-2xl">
                        <div class="flex flex-col items-center justify-center gap-2 bg-white rounded-lg h-44 {index % 2 === 0 ? "rounded-tl-6xl" : "rounded-br-6xl"}">
                            <svelte:component this={item.icon} />
                            <h1 class="font-medium text-center">{item.title}</h1>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="py-32 my-24 bg-blue rounded-tl-8xl rounded-br-8xl">
        <h1 class="text-3xl text-center text-white font-bricolage">
            I've <span class="font-semibold">worked with</span><br>hundreds of clients
        </h1>

        <Scroller />
        
        <h1 class="text-3xl text-center text-white font-bricolage">
            With moderation and<br><span class="font-semibold">management</span>
        </h1>
    </div>

    <div class="flex flex-col px-6 my-24 gap-9">
        <h1 class="text-3xl text-center font-bricolage">
            Explore what I <span class="font-semibold">offer</span>
        </h1>

        <div class="flex justify-center">
            <div class="flex flex-col w-full gap-4 md:w-1/2">

                {#each services as item, index}
                    <div class="bg-blue flex gap-3 p-2.5 rounded-2xl {index === 0 ? "rounded-tr-6xl" : index === services.length - 1 && "rounded-br-6xl"}">
                        <div class="p-10 bg-white rounded-lg h-fit w-fit {index === 0 ? "rounded-tr-6xl" : index === services.length - 1 && "rounded-br-6xl"}">
                            <svelte:component this={item.icon} />
                        </div>
                        <div class="flex flex-col gap-1.5 py-2">
                            <h1 class="text-2xl font-semibold text-white underline font-bricolage-condensed underline-offset-4">{item.title}</h1>
                            <span class="font-medium text-white">{item.description}</span>
                        </div>
                    </div>
                {/each}
                
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center py-32 my-24 bg-blue rounded-tl-8xl rounded-br-8xl">
        <h1 class="text-3xl text-center text-white font-bricolage">
            What people<br><span class="font-semibold">are saying</span>
        </h1>

        <div class="flex flex-col w-full gap-4 px-6 my-20 md:flex-row md:w-3/4">
            {#each reviews as item}            
                <div class="flex flex-col gap-2 p-2.5 bg-white rounded-2xl h-[26rem] custom-scrollbar rounded-br-6xl">
                    <div class="flex items-center gap-3">
                        <img class="w-20 rounded-lg rounded-br-4xl" src="{item.image}" alt="">
                        <div class="flex flex-col">
                            <h1 class="text-2xl font-semibold font-bricolage-condensed">{item.title}</h1>
                            <span class="">{item.subject}</span>
                        </div>
                    </div>
                    <span class="overflow-auto font-medium">{item.description}</span>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex flex-col px-6 my-24 gap-9">
        <h1 class="text-3xl text-center font-bricolage">
            Let’s get <span class="font-semibold">in touch</span>
        </h1>

        <div class="flex justify-center">
            <div class="flex flex-col items-center w-full gap-4 lg:flex-row lg:justify-center">

                {#each socials as item, index}
                    <div class="w-72 bg-blue p-2.5 rounded-2xl flex gap-3 items-center {index === 0 ? "rounded-tl-6xl" : index === socials.length - 1 && "rounded-bl-6xl lg:rounded-bl-2xl lg:rounded-br-6xl"}">
                        <div class="p-6 bg-white rounded-lg {index === 0 ? "rounded-tl-5xl" : index === socials.length - 1 && "rounded-bl-5xl lg:rounded-bl-lg lg:rounded-br-5xl"}">
                            <svelte:component this={item.icon} />
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <h1 class="text-2xl font-semibold text-white underline font-bricolage-condensed underline-offset-4">{item.title}</h1>
                            <Linked />
                        </div>
                    </div>
                {/each}

            </div>
        </div>
    </div>

        <div class="flex items-end pt-24 pb-20 bg-blue rounded-tl-8xl">
            <div class="flex flex-col gap-4 px-6 md:px-32">
                <h1 class="text-5xl font-light text-white font-bricolage-condensed">
                    Emilia Peterson
                </h1>
                <span class="text-2xl font-medium text-white">©️ {new Date().getFullYear()}</span>
            </div>
        </div>
</div>