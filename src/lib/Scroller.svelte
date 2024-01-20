<script lang="ts">
    interface Item {
        title?: string;
        subject?: string;
        description?: string;
        icon?: ConstructorOfATypedSvelteComponent;
        image?: string;
    }

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

<div class="my-20 space-y-5">
    <div class="flex overflow-hidden whitespace-nowrap">

        <div class="inline-block animate-slide-left">
            {#each guilds.row1 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg outline-1 outline md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>

        <div class="inline-block animate-slide-left">
            {#each guilds.row1 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg outline-1 outline md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>

        <div class="inline-block animate-slide-left">
            {#each guilds.row1 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg outline-1 outline md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
        
    </div>




    <div class="flex overflow-hidden whitespace-nowrap">

        <div class="inline-block animate-slide-right">
            {#each guilds.row2 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg outline-1 outline md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>

        <div class="inline-block animate-slide-right">
            {#each guilds.row2 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg outline-1 outline md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>

        <div class="inline-block animate-slide-right">
            {#each guilds.row2 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg outline-1 outline md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
        
    </div>
</div>