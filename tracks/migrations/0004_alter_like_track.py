# Generated by Django 3.2.7 on 2021-09-09 05:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0003_like'),
    ]

    operations = [
        migrations.AlterField(
            model_name='like',
            name='track',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='tracks.track'),
        ),
    ]
