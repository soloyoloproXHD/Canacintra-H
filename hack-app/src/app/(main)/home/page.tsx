'use client';
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem
  } from '@mantine/core';
import { IconChartBar, IconBook, IconUsers } from '@tabler/icons-react';
import classes from '../../css/home.module.css';
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import "../../globals.css";

const mockdata = [
    {
      title: 'Grupos y Alumnos',
      description:
        'Agrege y gestione sus Grupos / Alumnos.',
      icon: IconUsers,
    },
    {
      title: 'Encuesta de Aptitud',
      description:
        'Descubra que tipo de estilos de aprendizaje poseen sus alumnos. ',
      icon: IconChartBar,
    },
    {
      title: 'Materias y Planeación',
      description:
        'Genere actividades personalizadas para cada estilo de aprendizaje y materia, mejore sus planeaciones y ayude a sus alumnos a aprender de una mejor manera.',
      icon: IconBook,
    },
  ];

export default function Home() {
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className="transition-transform transform hover:scale-105 active:scale-95 shadow-lg shadow-gray-600 bg-l800" padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" className="text-l50" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <MantineProvider>
        <Container size="lg" py="xl">
          <Group justify="center" className="w-full max-w-4xl mx-auto max-h-4 my-auto">
            <Badge variant="filled" size="xlg" className="px-5">
              Bienvenido(a)
            </Badge>
          </Group>
  
          <Title order={2} className={classes.title} ta="center" mt="sm" p="lg">
            Juan Pedro Pedraza Leal
          </Title>
  
          <Text c="dimmed" className={classes.description} ta="center" mt="md">
            Esta aplicación está enfocada a mejorar la forma de aprendizaje de sus alumnos y en la gestión de sus planeaciones.
          </Text>
  
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
            {features}
          </SimpleGrid>
        </Container>
      </MantineProvider>
    );
}
