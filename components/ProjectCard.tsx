import { Box, Badge, Image, Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { Project } from '../types/Projects'

export type ProjectProp = {
  project: Project
}

function ProjectCard({ project }: ProjectProp) {
  return (
    <Box
      maxW={{ base: '90%', md: '100%' }}
      maxH="100%"
      boxShadow="base"
      borderWidth="1px"
      borderRadius="lg"
      key={project.title}
    >
      <Image
        src={`/assets/images/projects/screenshots/${project.screenshot}`}
        fallbackSrc={'/assets/logo/OpenAustin_Symbol_FullColor.jpg'}
        // @TODO: add alt text for these images
        alt=""
        objectFit="cover"
      />
      <Box p="6">
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignContent="center"
        >
          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {project.title}
          </Text>
          {/* <Badge
            borderRadius="full"
            px="2"
            colorScheme="teal"
            alignSelf="center"
          >
            {project.status}
          </Badge> */}
        </Flex>
        <Text>{project.description}</Text>
        <Flex flexDirection="row" justifyContent="start">
          <Text>Links: </Text>
          <Link
            href={`${project.project_at}`}
            color="red"
            paddingLeft="1%"
            isExternal
          >
            <Text>Github</Text>
          </Link>
          <Text>, </Text>
          <Link
            href={`${project.access_at}`}
            color="red"
            paddingLeft="1%"
            isExternal
          >
            <Text>Project</Text>
          </Link>
        </Flex>
        <Box>
          {project.stack && (
            <Text>
              Technologies:{' '}
              {project.stack?.map((tech, i) => {
                if (project.stack && i === project.stack.length - 1) {
                  return tech
                } else {
                  return `${tech}, `
                }
              })}
            </Text>
          )}
        </Box>
        <Box>
          <Text>
            Categories:{' '}
            {project.categories?.map((category, i) => {
              if (i === project.categories.length - 1) {
                return category
              } else {
                return `${category}, `
              }
            })}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCard
