<template>
  <v-app class="teal darken-4">
    <v-container>
      <v-layout class="ma4">
        <v-app style="background-color: grey lighten-1" class="rounded">
          <v-row>
            <v-col cols="12" md="8" class="ligne">
              <v-container>
                <v-row>
                  <v-col cols="12" md="9" offset-md="1">
                    <v-text-field
                     ref="search"
                     v-model="search"
                     full-width
                     hide-details
                     label="search"
                     single-line>
                     <v-icon>fas fa-search</v-icon>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" align="center" justify="center">
                    <v-badge color="error" overlap class="mt5">
                      <template slot="badge">8</template>
                      <v-icon color="tetiary">mdi-bell</v-icon>
                    </v-badge>                                  
                    <v-badge color="error" overlap class="mt5">
                      <template slot="badge">6</template>
                      <v-icon color="tetiary">mdi-message</v-icon>
                    </v-badge>
                  </v-col>
                   <v-col cols="12" md="12">
                    <h1 class="heading mb 2 grey--text ">content usage</h1>
                    <template>
                      <div id="app">
                        <GChart
                         type="ColumnChart"
                           :data="chartData"
                           :options="chartOptions"
                           />
                      </div>
                    </template>
                  </v-col>
                  <v-col cols="12" md12><h1 class="headline mb-5 grey--text" >reading history</h1></v-col>
                  <v-col cols="12" md="12">
                    <v-card>
                      <v-list>
                        <v-list-item>
                          <v-list-item-avatar color="blue">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>reseach 1</v-list-item-title>
                            <v-list-item-subtitle>500 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N300</v-list-item-title>
                            <v-list-item-subtitle>paid</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                         <v-divider inset></v-divider>
                         <v-list-item>
                          <v-list-item-avatar color="green">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>reseach 2</v-list-item-title>
                            <v-list-item-subtitle>60 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N300</v-list-item-title>
                            <v-list-item-subtitle>free</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                         <v-list-item>
                          <v-list-item-avatar color="yellow">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>reseach 3</v-list-item-title>
                            <v-list-item-subtitle>70 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>free</v-list-item-title>
                            <v-list-item-subtitle>free</v-list-item-subtitle>
                          </v-list-item-content>
                         </v-list-item>
                         <v-divider inset></v-divider>
                         <v-list-item>
                          <v-list-item-avatar color="pink">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>reseach 4</v-list-item-title>
                            <v-list-item-subtitle>80 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>4000</v-list-item-title>
                            <v-list-item-subtitle>subscription</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                         <v-list-item>
                          <v-list-item-avatar color="black">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>reseach 5</v-list-item-title>
                            <v-list-item-subtitle>600 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N300</v-list-item-title>
                            <v-list-item-subtitle>paid</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                       </v-list>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md12><h1 class="headline mb-5 grey--text" >Reseach Grants</h1></v-col>
                  <v-col cols="12" md="12">
                    <v-card>
                      <v-list>
                        <v-list-item>
                          <v-list-item-avatar color="blue">
                            <v-icon dark>fas fa-coins </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title></v-list-item-title>
                            <v-list-item-subtitle>Typescript</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N5000</v-list-item-title>
                            <v-list-item-subtitle color="orange">Apply now</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                         <v-divider inset></v-divider>
                         <v-list-item>
                          <v-list-item-avatar color="green">
                            <v-icon dark>fas fa-coins </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>Data science</v-list-item-title>
                            <v-list-item-subtitle></v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N3000</v-list-item-title>
                            <v-list-item-subtitle>Apply now</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-col>
                  
                </v-row>
              </v-container>

            </v-col>
    <v-col cols="12" md="4">
             <v-container>
              <v-row>
                <v-col cols="12" md12>
                 <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>fas fa-user-tie</v-icon>
                  </v-list-item-avatar>
                  <v-list-content>
                    <v-list-item-title>umar</v-list-item-title>
                    <v-list-item-subtitle>umar abubakar</v-list-item-subtitle>
                  </v-list-content>
                  <v-list-item-action>
                    <v-icon>fas fa-sign-out-alt</v-icon>
                  </v-list-item-action>
                 </v-list-item>
                 <v-divider></v-divider>
                </v-col>
              <v-col cols="12" md12><h1 class="headline mb-12 grey--text" >mentions</h1></v-col>
                <v-col cols="12" md12>
              <v-list-item>
                <v-list-item-avatar color="grey">
                  <v-icon color="white">fas fa-user-tie</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle>mubarak</v-list-item-subtitle>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon color="indiago-large">fas fa-angle-double-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-col>
             <v-col cols="12" md12>
              <v-list-item>
                <v-list-item-avatar color="grey">
                  <v-icon color="white">fas fa-user-tie</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle>uzlash</v-list-item-subtitle>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon color="indiago-large">fas fa-angle-double-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-col>
             <v-col cols="12" md12>
              <v-list-item>
                <v-list-item-avatar color="grey">
                  <v-icon color="white">fas fa-user-tie</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle>musa</v-list-item-subtitle>
                  <v-list-item-title></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon color="indiago-large">fas fa-angle-double-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-col>
            <p class="grey--text subheading p1-3 mt-3">Areas of interst</p>
            <v-timeline align-top dense fill-dot small black>
              <v-timeline-item fill-dot small color="blue" class="grey--text"> phyton</v-timeline-item>
              <v-timeline-item fill-dot small color="yellow" class="grey--text"> Dart</v-timeline-item>
              <v-timeline-item fill-dot small color="green" class="grey--text"> GO</v-timeline-item>
            </v-timeline>
            <v-col cols="12" md12><h1 class="headline mb-12 grey--text" >sugesstions</h1></v-col>
            <v-col cols="12" md="12">
                    <v-card>
                      <v-list>
                        <v-list-item>
                          <v-list-item-avatar color="blue">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>a reseach on..</v-list-item-title>
                            <v-list-item-subtitle>500 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N300</v-list-item-title>
                            <v-list-item-subtitle>paid</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="orange">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>a reseach on..</v-list-item-title>
                            <v-list-item-subtitle>500 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N300</v-list-item-title>
                            <v-list-item-subtitle>paid</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="red">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>a reseach on..</v-list-item-title>
                            <v-list-item-subtitle>500 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N300</v-list-item-title>
                            <v-list-item-subtitle>paid</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item>
                          <v-list-item-avatar color="grey">
                            <v-icon dark>fas fa-file </v-icon>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title>a reseach on..</v-list-item-title>
                            <v-list-item-subtitle>500 pages</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-content align="right">
                            <v-list-item-title indigo--text>N300</v-list-item-title>
                            <v-list-item-subtitle>paid</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
            </v-col>
              </v-row>
             </v-container>
            </v-col>
            
          </v-row>
          
        </v-app>
        
      </v-layout>
    </v-container>

  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
       
        chartData: [
        ['Year', 'free', 'paid', 'sub'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
     chartOptions: {
        chart: {
          title: 'narr',
          subtitle: 'free, paid, and sub: 2014-2017'
        }
     }
  }),
  
  
  computed:{
    theme(){
      return(this.$vuetify.theme.dark) ? 'dark' : 'light'

    }
  }
}
</script>
<style scoped>

</style>