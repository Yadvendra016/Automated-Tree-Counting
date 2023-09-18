import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Table from "./Table";
import Chart from "./Chart";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    marginBottom: 10,
  },
  content: {
    marginBottom: 10,
  },
});

function ResultPDF({ treeData }) {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text>Tree Enumeration Results</Text>
          </View>
          <View style={styles.content}>
            <Text>
              Total number of trees detected: {treeData.labels.length}
            </Text>
          </View>
          <View style={styles.content}>
            <Text>Masking image shows here</Text>
          </View>
          <View style={styles.content}>
            <Table treeData={treeData} />
          </View>
          <View style={styles.content}>
            <Chart treeData={treeData} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default ResultPDF;
