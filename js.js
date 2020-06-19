<?php $arId = array(2, 21, 3);  $i=1; ?>
<div class="accordion" id="accordion">
    // Начало цикла для печати категорий
    <?php foreach($arId as $id): ?>

        <div class="card">
            <div class="card-header" id="heading<?php echo $id;?>">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse<?php echo $id;?>" aria-expanded="true" aria-controls="collapse<?php echo $id;?>">
                        <?php echo get_cat_name($id); ?><!-- Печать названия категорий -->
                    </button>
                </h2>
            </div>
            <?php $sub_cats = get_categories( array('child_of' => $id, 'hide_empty' => 0) );  ?><!-- Получение подкатегорий -->
            <?php if( $sub_cats ) {foreach( $sub_cats as $cat ): ?><!-- Начало печати категорий -->
                <div id="collapse<?php echo $id;?>" class="collapse <?php if($i == 1){echo 'show';} ?>" aria-labelledby="heading<?php echo $id;?>" data-parent="#accordion">
                    <div class="card-body">
                        <h3>
                            <a href="<?php echo get_category_link($cat->cat_ID); ?>">
                                <?php echo $cat->name; ?></a>
                            <span><?php echo $cat->category_count; ?></span>
                        </h3>
                    </div>
                </div>
            <?php endforeach; ?>
            <?php } ?><!-- Конец печати категорий -->
        </div>

    <?php $i++; endforeach; ?>
</div>


<?php $arId = array(2, 21, 3); ?>
<div class="cnt-right">
    <ul id="accordion">

        <?php
        foreach($arId as $id): ?>


            <h2><?php echo get_cat_name($id); ?></h2>
            <div>
                <?php $sub_cats = get_categories( array('child_of' => $id, 'hide_empty' => 0) );  ?>


                <?php
                if( $sub_cats ) {
                    foreach( $sub_cats as $cat ): ?>
                        <h3><href="<?php echo get_category_link($cat->cat_ID); ?>"><?php echo $cat->name; ?></a> <span><?php echo $cat->category_count; ?></span></h3>
                    <?php endforeach; ?>
                <?php } ?>

            </div>


        <?php endforeach; ?>
    </ul>
</div>
<!-- -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script>
    $( function() {
        $( "#accordion" ).accordion();
    } );
</script>