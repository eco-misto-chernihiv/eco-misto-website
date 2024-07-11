## Оформлення PhotoGrid

#### Додати компонент Image

```
import { Image } from "astro:assets";
```

#### Додати файли з фото

Формат

```
import <вашаНазва> from "./images/назваПапки/назваФайлу.jpg";
```

Приклад

```
import product1 from "./images/plastic-fantastic/plastic_fantastic_product_001.jpg";
```

#### Приклади

Фото на всю ширину

```
<Centered>
  <PhotoGrid>
    <Full src={product1} />
  </PhotoGrid>
</Centered>
```

Фото в дві колонки

```
<Centered>
  <PhotoGrid>
    <Half src={product1} />
    <Half src={product2} />
  </PhotoGrid>
</Centered>
```

За налаштуванням орієнтація фото landscape (2:3), це можна змінити, додавши `orientation="portrait"`, відтак фото буде 3:4 або `orientation="square"` (1:1) та `orientation="panoramic"` (16:9).

```
<Centered>
  <PhotoGrid>
    <Full src={product1} orientation="square" />
    <Half src={product1} orientation="portrait" />
    <Half src={product2} orientation="panoramic" />
  </PhotoGrid>
</Centered>
```

Бажано надавати альтернативний підпис для фото, це можна зробити ось так

```
<Centered>
  <PhotoGrid>
    <Full src={product1} alt="Опис фото"/>
    <Half src={product1} alt="Опис фото"/>
    <Half src={product2} alt="Опис фото"/>
  </PhotoGrid>
</Centered>
```

## Оформлення відео

Формат лінку

```
https://www.youtube.com/embed/onmfc5VQ8Pc?si=DjsS7P4aK0TbfDei
```

Приклад

```
    <Video src="https://www.youtube.com/embed/onmfc5VQ8Pc?si=DjsS7P4aK0TbfDei" />
```
