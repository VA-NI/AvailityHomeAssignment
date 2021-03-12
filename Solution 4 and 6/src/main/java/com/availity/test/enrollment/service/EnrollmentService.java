package com.availity.test.enrollment.service;

import com.availity.test.enrollment.model.Enrollment;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

public class EnrollmentService {

    /**
     * Entry point for the Enrollment Service
     * @param fileName
     */

    public void processCSVEnrollment(String fileName){
        try {
            List<String> strings = readCsvFile(fileName);
            List<Enrollment> enrollments = parseCSVData(strings);
            Map<String, List<Enrollment>> insuranceCompanyData = groupByInsuranceCompany(enrollments);
            insuranceCompanyData.forEach((key, value) -> writeFile(value, key));
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    /**
     *
     * Reads a CSV file and returns a List of lines present in the file
     *
     * @param fileName
     * @throws URISyntaxException
     * @throws IOException
     */
    private List<String> readCsvFile(String fileName) throws URISyntaxException, IOException {
        return Files.readAllLines(Paths.get(getClass().getClassLoader().getResource(fileName).toURI()));
    }

    /**
     *
     * Parse CSV lines into a list of Enrollment using Java 8
     *
     * @param lines
     * @return List<Enrollment>
     */
    private List<Enrollment> parseCSVData(List<String> lines){
        return lines.stream().filter(s-> s!=null && s.split(",").length==5).map(s -> {
            String[] split = s.split(",");
            return Enrollment.builder()
                    .userId(split[0])
                    .firstName(split[1])
                    .lastName(split[2])
                    .version(Integer.valueOf(split[3]))
                    .insuranceCompany(split[4]).build();
        }).collect(Collectors.toList());
    }

    /**
     * Writes the insurance company data in a file
     * @param list
     * @param key
     */
    private void writeFile(List<Enrollment> list,String key) {
        try {
            String fileName=key+".csv";
            String fileContent = list.stream().map(Enrollment::toString).collect(Collectors.joining("\n"));
            Files.write(Paths.get(fileName),fileContent.getBytes());
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    /**
     * Filters old version data, sorts by first namd and last name and then groups data by insurance company name
     *
     * @param enrollments
     *
     */
    private Map<String, List<Enrollment>> groupByInsuranceCompany(List<Enrollment> enrollments) {
        return enrollments.stream()
                .collect(Collectors.groupingBy(Enrollment::getUserId,
                        Collectors.maxBy(Comparator.comparing(Enrollment::getVersion))))
                .values().stream().map(Optional::get)
                .sorted(Comparator.comparing(Enrollment::getFirstName).thenComparing(Enrollment::getLastName))
                .collect(Collectors.groupingBy(Enrollment::getInsuranceCompany));
    }
}
