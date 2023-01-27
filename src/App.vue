<template>
  <v-app>
    <v-container>
      <v-form ref="form">
        <v-text-field
          label="Name"
          v-model="name"
        />
        <v-text-field
          label="Address"
          v-model="address"
        />
        <v-text-field
          label="Contact"
          v-model="contact"
        />
        <h2>Work Experience</h2>
        <div v-for="(work, index) in works" :key="index">
          <v-text-field
            label="Position"
            v-model="work.position"
          />
          <v-text-field
            label="Company"
            v-model="work.company"
          />
          <v-textarea
            label="Description"
            v-model="work.description"
          />
        </div>
        <v-btn @click="addWork">Add Work Experience</v-btn>
        <h2>Education</h2>
        <div v-for="(study, index) in studies" :key="index">
          <v-text-field
            label="Degree"
            v-model="study.degree"
          />
          <v-text-field
            label="Institution"
            v-model="study.institution"
          />
          <v-textarea
            label="Description"
            v-model="study.description"
          />
        </div>
        <v-btn @click="addStudy">Add Education</v-btn>
        <v-btn @click="generatePDF">Generate CV</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: 'App',
  data() {
    return {
      name: "",
      address: "",
      contact: "",
      works: [
        { id: 1, position: "", company: "", description: "" }
      ],
      studies: [
        { id: 1,  degree: "", institution: "", description: "" }
      ]
    }
  },
  methods: {
    addWork() {
      this.works.push({ id: position.company, position: "", company: "", description: "" });
    },
    addStudy() {
      this.studies.push({ id: degree.institution, degree: "", institution: "", description: "" });
    },
    generatePDF() {
      const docDefinition = {
        content: [
          { text: this.name, style: 'header' },
          { text: this.address, style: 'subheader' },
          { text: this.contact, style: 'subheader' },
          { text: 'Work Experience', style: 'subheader' },
          ...this.works.map(work => {
            return {
              text: `${work.position} at ${work.company}`,
              style: 'subheader'
            },
            {
              text: work.description,
              style: 'text'
            }
          }),
          { text: 'Education', style: 'subheader' },
          ...this.studies.map(study => {
            return {
              text: `${study.degree} from ${study.institution}`,
              style: 'subheader'
            },
            {
              text: study.description,
              style: 'text'
            }
          })
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
          },
          subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 10, 0, 5]
          },
          text: {
            fontSize: 12,
            margin: [0, 5, 0, 10]
          }
        }
      }
      pdf.createPdf(docDefinition).download()
    }
  },
}
</script>