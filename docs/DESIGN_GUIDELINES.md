# Shop Minis UI Extensions - Design Guidelines

## Design Principles for Shop Minis UI Extensions Components

### 1. Use Provided Components
- Utilize the provided UI components in the Shop Minis SDK to ensure seamless integration of Shop. Use the existing UI components to maintain consistency and familiarity for users, providing a cohesive user experience.
- While we provide a comprehensive set of components, we understand that there may be genuine cases where a custom component is necessary. In such instances, developers are encouraged to communicate their requirement when submitting their Shop Mini for review, ensuring that the custom component aligns with our design principles and quality standards.
- Prior to building a custom component, developers are encouraged to reach out to the Shop Minis team and request the addition of the desired functionality or UI component if it is missing. We will try our best to accommodate so that you can use provided components over custom ones.
- This approach ensures that custom components are only built when necessary, reducing redundancy and maintaining a unified design language across the platform.

### 2. Avoiding Dead Ends and Providing Navigation
- Should not stop the user from interacting with the content.
- Use clear and descriptive labels for navigation elements to help users understand where they will be directed when they tap on them.
- Use intuitive icons or labels for navigation elements to help users understand their purpose and functionality.

### 3. Performance
- Prioritize performance by ensuring that the Shop Mini UI Extension Component is fast and responsive, providing a smooth user experience.
- Extension UI Components should not fetch any content. Content must be injected in the component's props
- Continuously iterate and optimize the component's performance based on user feedback, analytics, and emerging best practices.

## Foundations

### Accessibility
- Make sure that all content, including text, images, and multimedia, is accessible to users with disabilities.
- Provide captions or transcripts for videos, alternative text for images, and descriptive labels for interactive elements.

### Icons
- Take advantage of the wide variety of icons available through the `<Icon />` component provided.
- If you require an additional icon that is not available, feel free to request it, and our team will consider adding it to the icon library.
- In case you need a custom icon, aim to create it in a way that aligns with the style and aesthetic of Shop's existing icons.
- Custom icons should strive to maintain consistency with the existing icon set, ensuring they look and feel cohesive within Shop.

### Typography
- Utilize the wide range of typographic styles available through the `<Text />` component provided.
- The `<Text />` component offers a variety of styles, such as headings, paragraphs, and other text elements, ensuring consistency and coherence throughout the app.
- All typographic styles provided by the `<Text />` component support accessibility features, including dynamic text sizing, ensuring readability for users with different visual needs.
- Please refrain from introducing custom or external typographic styles to maintain a unified and harmonious visual language within the app, enhancing readability and user experience.

### Spacing
- Utilize the spacing options provided by the `<Box />` components to ensure consistent and appropriate spacing between elements.
- Additionally, take advantage of the spacing values offered through the Theme file, ranging from xxxs to 3xl sizes.
- By using the provided spacing options and values, you can maintain a consistent and visually pleasing layout throughout the app.
- Avoid introducing custom or arbitrary spacing values to maintain a cohesive design language and ensure harmonious spacing between elements.

### Loading
- Minimize the usage of loading states as much as possible, as outlined in the performance section.
- When loading states are necessary, consider using skeleton loading if the layout is static and predictable. This provides a placeholder representation of the content being loaded.
- For generic loading indicators, utilize the provided `<Spinner />` component. This ensures consistency and familiarity for users.
- By minimizing loading states, using appropriate loading techniques, and utilizing the `<Spinner />` component, you can provide a smooth and efficient loading experience for users.

### Error Handling
- Handle errors effectively and communicate them clearly to the user, providing information about what went wrong and suggesting possible actions to resolve the error.
- Avoid leaving users at a dead end by ensuring there is always a next action or relevant content available in the current context.

## More information

### Design principles for Shop Minis
You can get familiar with the Shop Minis design principles in our main [docsite](https://shop.app/minis/docs/design/principles/).
