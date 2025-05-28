<script setup lang="ts">
definePageMeta({
  title: "Home",
});

const reveal = ref(false);
</script>

<template>
  <v-container class="bg-surface" min-height="100%">
    <v-row class="h-md-50">
      <v-col cols="12" md="6" style="min-height: 40dvh;">
        <v-card
          class="mx-auto d-flex flex-column border-xl"
          max-width="full"
          subtitle="The #1 Vue UI Library"
          min-height="100%"
        >
          <template #title>
            <span class="font-weight-black">Welcome to Vuetify</span>
          </template>
          <v-card-text class="bg-surface-light pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="teal-accent-4"
              text="Learn More"
              variant="text"
              @click="reveal = true"
            />
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="position-absolute w-100"
              height="100%"
              style="bottom: 0;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4">
                  Origin
                </p>

                <p class="text-medium-emphasis">
                  late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>

              <v-card-actions class="pt-0">
                <v-btn
                  color="teal-accent-4"
                  text="Close"
                  variant="text"
                  @click="reveal = false"
                />
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" style="min-height: 40dvh;">
        <v-card
          class="mx-auto d-flex flex-column border-xl"
          max-width="full"
          subtitle="The #1 Vue UI Library"
          min-height="100%"
        >
          <template #title>
            <span class="font-weight-black">Welcome to Vuetify</span>
          </template>
          <v-card-text class="bg-surface-light pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="teal-accent-4"
              text="Learn More"
              variant="text"
              @click="reveal = true"
            />
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="position-absolute w-100"
              height="100%"
              style="bottom: 0;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4">
                  Origin
                </p>

                <p class="text-medium-emphasis">
                  late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>

              <v-card-actions class="pt-0">
                <v-btn
                  color="teal-accent-4"
                  text="Close"
                  variant="text"
                  @click="reveal = false"
                />
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="h-md-50">
      <v-col cols="12" md="12" style="min-height: 45dvh;">
        <v-card
          class="mx-auto d-flex flex-column border-xl"
          max-width="full"
          subtitle="The #1 Vue UI Library"
          min-height="100%"
        >
          <template #title>
            <span class="font-weight-black">Welcome to Vuetify</span>
          </template>
          <v-card-text class="bg-surface-light pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="teal-accent-4"
              text="Learn More"
              variant="text"
              @click="reveal = true"
            />
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="position-absolute w-100"
              height="100%"
              style="bottom: 0;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4">
                  Origin
                </p>

                <p class="text-medium-emphasis">
                  late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>

              <v-card-actions class="pt-0">
                <v-btn
                  color="teal-accent-4"
                  text="Close"
                  variant="text"
                  @click="reveal = false"
                />
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dolores illum laboriosam nesciunt non placeat praesentium? Aliquam at consectetur cumque dignissimos dolorem dolores doloribus dolorum earum fugit illo inventore labore magnam provident quaerat quia, saepe similique soluta temporibus ullam veniam? Ab animi blanditiis dicta dignissimos dolorum eligendi, expedita fuga illo impedit magni obcaecati repellendus sint, sit suscipit tempore veniam vitae voluptates. Accusamus ad animi architecto at cumque debitis delectus deserunt dignissimos distinctio dolore dolorum eaque eius esse est, eum ex impedit labore molestiae porro possimus quidem quis rerum tempora temporibus totam vel vero voluptate! Aut consectetur culpa cupiditate debitis distinctio eaque harum illo incidunt magni nostrum optio quasi, repellat repellendus. Ad aspernatur assumenda consequatur eius enim error nulla odit, omnis, ratione reprehenderit tempora voluptate. A aliquam commodi dolorem ex harum nesciunt perspiciatis quam tenetur ullam unde. Ad aperiam at consequatur consequuntur cum debitis dignissimos distinctio dolore dolorum eos, esse est eum expedita fugit id ipsum laborum laudantium molestiae nam nobis non, perferendis porro praesentium quaerat quam quia quo recusandae reprehenderit rerum saepe sit sunt suscipit tempore unde ut velit voluptas. Distinctio doloribus in obcaecati omnis pariatur porro quod soluta ut vero voluptate! Architecto hic iure nam nisi sapiente. Alias animi asperiores commodi consectetur culpa deleniti dolor, ducimus fugiat illum molestias necessitatibus odio placeat porro praesentium qui quis repellendus similique! Autem consectetur, cupiditate ducimus eaque error eveniet fuga illo ipsum iste iure labore odio officia perspiciatis quidem similique, sint voluptate. Aliquam animi assumenda at aut cumque dignissimos dolore eligendi fuga id magni natus odit quis saepe, velit vitae! Aspernatur expedita libero, molestias quis sequi veniam voluptas. Autem consectetur, debitis itaque magni minima reiciendis voluptatum. Corporis ea, in magnam odit possimus provident sapiente. Accusamus adipisci aspernatur at, aut dignissimos dolore doloremque earum error, expedita, fuga inventore itaque laborum laudantium quod sint? Amet dolorum ducimus exercitationem, neque quae reprehenderit saepe vero voluptates. A ab beatae fuga nisi quod soluta suscipit! Ipsum iure temporibus voluptatem? Aliquam aspernatur cumque debitis, delectus, doloremque dolores dolorum eum modi nobis nostrum quas quia reprehenderit totam unde voluptates. Aliquid architecto, at consequatur consequuntur dignissimos eaque earum esse ex hic inventore ipsam mollitia quae qui repellat sit, tenetur vel. Beatae consectetur cum esse, eum facilis id iste iusto magni nisi possimus quis quo repellat rerum suscipit voluptatem. Accusamus, autem, delectus? Aliquam consectetur consequatur debitis deserunt exercitationem, fuga in magni minus nemo nesciunt nulla possimus provident quae sit tenetur veritatis voluptas! Amet animi aperiam architecto aspernatur blanditiis commodi cum cumque, debitis delectus deserunt eaque earum eligendi esse eveniet fuga ipsum maxime minus mollitia quae, quas quibusdam quidem quo quos recusandae saepe soluta totam voluptas? Et, rem, vel! Aliquid corporis dicta earum eius, eligendi esse et, iusto magni optio perspiciatis provident rerum sint sunt suscipit veritatis? A alias, aliquid amet deleniti dignissimos hic ipsa, ipsum, libero molestias odio odit officiis omnis repellendus vel voluptate voluptatibus voluptatum! Adipisci at ducimus porro quas voluptatem. Ab alias amet consequuntur corporis cupiditate deserunt est, facilis fugit ipsa natus nobis pariatur porro quae similique suscipit tenetur ullam vero voluptatibus. Ab accusantium ad aperiam asperiores corporis cum cumque delectus, dolore dolores eligendi et eveniet explicabo fuga fugiat hic in inventore itaque iusto modi nam officiis optio quaerat quas quidem suscipit. Amet commodi culpa, dignissimos, dolores eaque laboriosam, magnam nulla odio perferendis porro quidem quos reprehenderit sed sunt vel! Adipisci asperiores culpa deserunt dignissimos eos error hic id, iure labore laboriosam nemo quas repellat repellendus, sapiente vel? Assumenda atque commodi et explicabo illum iusto, nihil, nisi officiis placeat quaerat quia recusandae sapiente velit! Animi molestiae nesciunt obcaecati ratione veritatis. Accusamus consequatur debitis deserunt eius exercitationem fuga numquam repudiandae veniam vitae voluptatem? Accusamus consequatur debitis, earum ex inventore magni maiores nulla pariatur tempora temporibus, voluptatibus voluptatum. Accusamus accusantium delectus deserunt dolorum ea eos id inventore minus modi nemo nobis non perferendis quam, rem ullam unde veniam. Animi architecto aspernatur autem dignissimos distinctio iusto ratione, repudiandae? Dolorem eligendi eos expedita laboriosam laudantium natus omnis praesentium, quia quo voluptates. Accusamus ducimus officia optio sint. Accusantium distinctio eaque error in omnis tempora? Amet consectetur id necessitatibus sint soluta? Accusamus adipisci architecto deserunt eos in, inventore ipsum laboriosam necessitatibus omnis quia quisquam sapiente sequi similique ullam vel. Deserunt eum facilis itaque iusto libero quo totam voluptas! Assumenda culpa dicta nam odio sapiente? A at beatae consectetur cum cupiditate debitis distinctio, dolorum est id illo illum iste laboriosam minima minus nihil non nostrum numquam perferendis quibusdam, reiciendis sapiente similique sint suscipit unde vero! Asperiores, at atque aut beatae dignissimos eum excepturi fugit harum ipsum itaque iure libero minima molestias, nam nisi optio possimus quam qui similique tempora tempore ullam vitae. Accusamus, aut deserunt eius error impedit, ipsam ipsum iure natus nemo nihil nisi non quia rerum sequi sint, sunt ullam vel. Neque, obcaecati, similique. Aperiam, eligendi quod! Accusantium ad commodi cumque, dignissimos dolore illo ipsum minima non nulla perspiciatis quis quisquam sequi sit ullam vel. Ab accusamus architecto commodi dolore doloremque eius enim esse explicabo incidunt minima natus necessitatibus nisi nostrum odit placeat, possimus provident quaerat quasi recusandae repellendus reprehenderit repudiandae rerum saepe, sed sequi sit, sunt vel voluptas voluptate voluptatum. Ea, quasi, vel? Ad alias asperiores autem excepturi fugiat incidunt iusto magnam nihil nisi nulla, numquam officia perspiciatis saepe ullam velit voluptas voluptatum. Ab amet, at beatae commodi delectus dolore eius esse explicabo facilis labore neque optio pariatur, quidem reiciendis sapiente sed sint suscipit tempore, temporibus voluptatibus. Ab accusantium adipisci autem consequuntur cumque debitis deleniti eaque eius et, eveniet ex excepturi facilis harum illum ipsa magni maiores minus necessitatibus nobis nostrum nulla numquam obcaecati officia omnis, perspiciatis quaerat quidem sed sit tempore temporibus totam veritatis vero vitae! Alias molestiae repellendus saepe. A alias amet asperiores atque cumque dolor dolore dolores eius esse eum facilis illo iusto labore maxime modi nemo odio possimus, praesentium provident quae qui quia quisquam repudiandae sapiente tempore ullam voluptatem? Architecto dicta dolore eligendi eos error fugiat illum impedit ipsam labore laudantium maiores molestiae nesciunt nobis non officia officiis, possimus reiciendis, rem repudiandae rerum sed ullam ut vero voluptates voluptatum. Ad saepe ut veritatis? Accusamus amet beatae culpa, distinctio dolore excepturi id iste nam nihil porro possimus praesentium quasi vel voluptas voluptatibus. Eos, quis?</p>
  </v-container>
</template>
