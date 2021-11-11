<template>
  <v-stack
    class="build-usecases"
    direction="column"
    sm-direction="column"
    gap="3.125rem"
    sm-gap="3.75rem"
  >
    <v-stack
      v-for="useCase in useCasesList"
      :key="useCase.key"
      direction="row"
      sm-direction="column"
      gap="1.875rem"
      sm-gap="1.5rem"
      justify="space-between"
    >
      <v-heading class="build-usecases-heading" :level="3" line-height="1.2">
        {{ useCase.heading }}
      </v-heading>
      <v-text
        class="build-usecases-description"
        color="secondary"
        line-height="1.4"
        :weight="400"
      >
        {{ useCase.description }}
      </v-text>
    </v-stack>
  </v-stack>
</template>

<script>
export default {
  name: 'BuildUseCases',
  data() {
    return {
      useCasesList: [
        {
          key: 'gaming',
          heading: 'Gaming',
          description:
            'Store game assets and player profiles seamlessly. Selectively share data with other players.',
        },
        {
          key: 'nfts',
          heading: 'NFTs',
          description:
            'Save metadata and assets through a DID link instead of centralised servers. Create private NFTs that can only be accessed by the NFT owner.',
        },
        {
          key: 'file-sharing',
          heading: 'File Sharing',
          description:
            'Securely store, share, and delete files. Decide who gets access and for how long. Track all actions on the file on-chain.',
        },
        {
          name: 'identity',
          heading: 'Identity',
          description:
            'Give unique identity to users and data. Attach data that matters to them and selectively share them with an email ID or public address. Build identity based access permissions to access data.',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
@import url('./lib/media-query-helper.css');

.build-usecases {
  margin-top: 1.875rem;
}

.build-usecases-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.1875rem;
  font-weight: 700;
  min-width: 10rem;
  letter-spacing: normal;

  @media (--viewport-small) {
    font-size: 1.25rem;
    font-size: 600;
  }
}

.build-usecases-description {
  font-size: 1.25rem;
  max-width: 42ch;

  @media (--viewport-small) {
    font-size: 1rem;
  }
}
</style>
