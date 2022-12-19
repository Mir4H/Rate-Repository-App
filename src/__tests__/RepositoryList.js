
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from "../components/RepositoryList";

const formatNumber = (num) => {
  return num > 999 ? (num / 1000).toFixed(1) + "K" : num;
};

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      const repositoryItems = getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      const firstRepo = repositories.edges[0].node;
      const secondRepo = repositories.edges[1].node;

      expect(firstRepositoryItem).toHaveTextContent(firstRepo.fullName);
      expect(firstRepositoryItem).toHaveTextContent(firstRepo.description);
      expect(firstRepositoryItem).toHaveTextContent(firstRepo.language);
      expect(firstRepositoryItem).toHaveTextContent(
        formatNumber(firstRepo.forksCount)
      );
      expect(firstRepositoryItem).toHaveTextContent(
        formatNumber(firstRepo.stargazersCount)
      );
      expect(firstRepositoryItem).toHaveTextContent(
        formatNumber(firstRepo.ratingAverage)
      );
      expect(firstRepositoryItem).toHaveTextContent(
        formatNumber(firstRepo.reviewCount)
      );
      expect(secondRepositoryItem).toHaveTextContent(secondRepo.fullName);
      expect(secondRepositoryItem).toHaveTextContent(secondRepo.description);
      expect(secondRepositoryItem).toHaveTextContent(secondRepo.language);
      expect(secondRepositoryItem).toHaveTextContent(
        formatNumber(secondRepo.forksCount)
      );
      expect(secondRepositoryItem).toHaveTextContent(
        formatNumber(secondRepo.stargazersCount)
      );
      expect(secondRepositoryItem).toHaveTextContent(
        formatNumber(secondRepo.ratingAverage)
      );
      expect(secondRepositoryItem).toHaveTextContent(
        formatNumber(secondRepo.reviewCount)
      );
    });
  });
});

