<template>
  <v-list :list-items="rulesListItems" />
</template>

<script>
export default {
  name: 'BugBountyRules',
  data() {
    return {
      rulesListItems: [
        {
          title: "Don't Exploit Reported Bugs",
          description:
            'Exploiting bugs in the code to conduct malicious activity in the network is a big NO. Also, avoid hacking and social engineering of other users.',
        },
        {
          title: 'Respect Privacy',
          description:
            "Don't violate the privacy of users and other bounty hunters on the Network.",
        },
        {
          title: 'Do Not Attack or Defraud Arcana Network',
          description:
            'This includes the Arcana team, operations, or technology (e.g. DDOS attacks, spam and social engineering).',
        },
        {
          title: 'Bug Report Process and Bug Severity Level',
          description: [
            'Only bugs that are reported through the forum will be considered. Bugs sent through emails, DMs, and other media will not be counted as part of the Bug Bounty Program.',
            'Early bird gets the bounty: The first person to accurately report a bug will be considered for the reward. Reports that are incomplete will not be considered. Each bug reported will only be rewarded once.',
            "Reported bugs are eligible if they haven't been reported publicly first.",
          ],
          variant: 'outlined',
        },
      ],
    }
  },
}
</script>
