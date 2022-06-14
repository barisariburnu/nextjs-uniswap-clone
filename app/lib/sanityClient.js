import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'tyv5pcm6',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skUCPIOuryP9DbLSwOZeR4zgLeMZmp7JeaisMzayn1aLVcLYNt5786gI8BAqTawuLVjYDo5Y7sRULzfr8pKVtc1HIfRiy59gAA3f6ISQCLfLe5QpP1jR9IqBtDBJoUrbYb3WRrqwqSDTGPjgpgdC72f5NjQNMmdFHPESWsCod1IZo2vQyfmo',
    useCdn: false,
});